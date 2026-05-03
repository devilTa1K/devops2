from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from model import get_prediction

app = FastAPI(title="Fake News Detection API")

class PredictionRequest(BaseModel):
    text: str

class PredictionResponse(BaseModel):
    result: str
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    if not request.text or len(request.text.strip()) == 0:
        raise HTTPException(status_code=400, detail="Text is required")
    
    result, confidence = get_prediction(request.text)
    return PredictionResponse(result=result, confidence=confidence)

@app.get("/health")
async def health():
    return {"status": "healthy"}
