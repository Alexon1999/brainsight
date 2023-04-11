import streamlit as st
import numpy as np
import tensorflow as tf
import warnings
import platform
from PIL import Image
from utils import image2tensor, pred2label

warnings.filterwarnings('ignore')
st.set_option('deprecation.showfileUploaderEncoding', False)


# Upload an image and set some options for demo purposes
st.header("Cropper Demo")
img_file = st.sidebar.file_uploader(label='Upload a file', type=['png', 'jpg'])


if img_file:
    img = Image.open(img_file)
    st.image(img, caption='scan', use_column_width=True)


def on_submit():
    '''
        consume deep learning model
    '''
    if img_file:
        img = img_file.getvalue()
        img_batch = image2tensor(img, dim=(176, 208))
        model = tf.keras.models.load_model(
            './models/alzheimer_inception_cnn_model')
        prediction = model.predict(img_batch)[0]
        print(prediction)
        prediction_label = pred2label(prediction)
        st.write(f"Prediction : {prediction_label}")
    print('ok')


st.sidebar.button('Predict', key=None, help=None,
                  on_click=on_submit, disabled=False)


st.write('Python version:', platform.python_version())
st.write('TensorFlow version:', tf.__version__)
st.write('Streamlit version:', st.__version__)
