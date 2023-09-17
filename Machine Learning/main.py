import streamlit as st
from PIL import Image
import tensorflow as tf
import numpy as np

loaded_model = tf.keras.models.load_model('crowd_model.h5')

st.title("Crowd Counting Model")


st.sidebar.title("Upload an Image")
uploaded_file = st.sidebar.file_uploader("Choose an image...", type=["jpg", "jpeg", "png", "gif"])


def predict_image(image):
    # Preprocess the image
    image = image.resize((640, 480))  # Resize the image to match the model's input size
    image_array = np.array(image)
    image_array = image_array / 255.0  # Normalize the pixel values if needed
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

    # Make a prediction on the image
    prediction = loaded_model.predict(image_array)
    return prediction[0][0]



if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image', use_column_width=True)

    if st.button("Predict"):
        prediction = predict_image(image)
        st.write(f"Predicted Number of People: {int(prediction)}")



st.sidebar.info("This app predicts the number of people in an uploaded image.")


