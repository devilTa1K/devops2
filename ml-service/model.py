import os
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

MODEL_PATH = "model.pkl"

def train_mock_model():
    """
    Trains a mock model on a tiny dataset if a real model doesn't exist.
    This simulates a real ML pipeline without requiring large datasets to be downloaded.
    """
    print("Training mock model...")
    # Tiny dataset of fake and real news snippets
    texts = [
        "Aliens landed in New York today and took over the Empire State Building.",
        "The earth is flat and scientists have been lying to us for centuries.",
        "A new study shows that drinking 10 gallons of coffee a day grants immortality.",
        "Government secretly replaces all birds with surveillance drones.",
        "Local man discovers secret to eternal youth using only lemons and baking soda.",
        "The Federal Reserve announced a quarter-point interest rate cut today.",
        "NASA successfully launched the new Mars rover this morning.",
        "The local city council voted to increase funding for public schools.",
        "Apple released its new quarterly earnings report showing a 5% increase in revenue.",
        "A severe thunderstorm warning has been issued for the metropolitan area."
    ]
    labels = ["FAKE", "FAKE", "FAKE", "FAKE", "FAKE", "REAL", "REAL", "REAL", "REAL", "REAL"]

    # Create a pipeline with TF-IDF and Logistic Regression
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(stop_words='english')),
        ('clf', LogisticRegression(random_state=42))
    ])

    pipeline.fit(texts, labels)

    with open(MODEL_PATH, 'wb') as f:
        pickle.dump(pipeline, f)
    
    print("Mock model trained and saved.")
    return pipeline

def load_model():
    if not os.path.exists(MODEL_PATH):
        return train_mock_model()
    
    with open(MODEL_PATH, 'rb') as f:
        return pickle.load(f)

# Initialize model
pipeline = load_model()

def get_prediction(text: str):
    """
    Returns a tuple of (result_string, confidence_float)
    """
    # Predict probabilities
    probs = pipeline.predict_proba([text])[0]
    
    # Get the predicted class index
    pred_idx = probs.argmax()
    
    # Get class name and confidence
    result = pipeline.classes_[pred_idx]
    confidence = float(probs[pred_idx])
    
    # Optional: If confidence is very low, maybe default to some heuristic, but here we just return
    return result, confidence
