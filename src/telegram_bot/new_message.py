import os
import json
import telebot 

from config import * 
from pathlib import Path
from telebot import types


def send_new_message(new_message_from_site):
    BOT_DIR = Path(__file__).resolve().parent
    USERS_FILE_NAME = 'users.json'
    USERS = BOT_DIR / USERS_FILE_NAME
    
    bot = telebot.TeleBot(os.environ.get('TELEGRAM_TOKEN'))

    markup = types.ReplyKeyboardMarkup(row_width=1)
    list_of_messages = types.KeyboardButton('/all_messages')
    last_message = types.KeyboardButton('/last_message')
    markup.row(list_of_messages, last_message)

    with open(USERS, 'r') as f:
        users = json.load(f)

        for user in users:
            bot.send_message(user['user']['id'], new_message_from_site)