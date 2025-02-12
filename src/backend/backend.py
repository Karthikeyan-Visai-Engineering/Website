from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from pathlib import Path

app = FastAPI()

# ✅ Enable CORS properly
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],  # ✅ Ensure OPTIONS requests are handled
    allow_headers=["*"],
)

# JSON file to store messages
JSON_FILE = "contact_messages.json"
file_path = Path(JSON_FILE)

# Ensure the file exists
if not file_path.exists():
    file_path.write_text("[]", encoding="utf-8")  # Initialize as an empty JSON array

# ✅ Define Contact Form Model
class ContactForm(BaseModel):
    name: str
    email: str
    subject: str
    message: str

# ✅ Ensure route is correct
@app.post("/contact/")
async def submit_contact_form(form: ContactForm):
    try:
        with open(JSON_FILE, "r", encoding="utf-8") as file:
            data = json.load(file)

        data.append(form.dict())

        with open(JSON_FILE, "w", encoding="utf-8") as file:
            json.dump(data, file, indent=4)

        return {"message": "Your message has been received!", "status": "success"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ✅ View stored messages
@app.get("/view-messages/")
async def view_messages():
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="No contact messages found")

    with open(JSON_FILE, "r", encoding="utf-8") as file:
        data = json.load(file)

    return data

# ✅ Root endpoint
@app.get("/")
def read_root():
    return {"message": "FastAPI Contact Form Backend is Running!"}
