# Create a Docker image that packages Tensorflow, Streamlit and another data vizualisation libraries
```
$ docker build -t streamlit_final_project .
$ docker run -it -v "$(pwd):/app" -p 4000:4000 streamlit_final_project
```

> if you don't specify the tensorflow version, it will install the latest stable release of TensorFlow, which is compatible with your Python version.

### versions
> continumio/miniconda with Python 3.10.8
> tensorflow ==2.11.0==
> streamlit ==1.15.2==