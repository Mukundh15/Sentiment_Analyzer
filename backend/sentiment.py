from transformers import pipeline

classifier = pipeline("sentiment-analysis")

def get_sentiment(message):
    result = classifier(message)
    return {
        "label": result[0]['label'],
        "score": round(result[0]['score'], 4)
    }
