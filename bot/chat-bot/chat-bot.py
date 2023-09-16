#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
@author: naveen
"""
from fastapi import FastAPI
from dotenv import load_dotenv ,dotenv_values
from hugchat import hugchat
from hugchat.login import Login

load_dotenv();

secrets = dotenv_values('hf.env')
hf_email = secrets['EMAIL']
hf_pass = secrets['PASS']

app = FastAPI()

@app.get("/")
def generate_response(prompt_input):
    # Hugging Face Login
    sign = Login(hf_email,  hf_pass)
    cookies = sign.login()
    # Create ChatBot
    chatbot = hugchat.ChatBot(cookies=cookies.get_dict())
    return chatbot.chat(prompt_input)




