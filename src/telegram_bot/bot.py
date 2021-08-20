import json
import telebot
import os

from config import *
from pathlib import Path
from time import sleep
from telebot import types

bot = telebot.TeleBot(TOKEN)

markup = types.ReplyKeyboardMarkup(row_width=1)
list_of_messages = types.KeyboardButton('/all_messages')
last_message = types.KeyboardButton('/last_message')
markup.row(list_of_messages, last_message)


def update_users_list(to_write): 
    with open(USERS, 'w') as file: 
        json.dump(to_write, file, indent=4)

def user_is_unique(message):
    with open(USERS, 'r') as f:
        users = json.load(f)

        user_not_exist = True
        for user in users: 
            if user['user']['id'] == message.from_user.id:
                user_not_exist = False
                break


        if user_not_exist: 
            new_user = {'user': {}} 

            new_user['user']['id'] = message.from_user.id
            new_user['user']['first_name'] = message.from_user.first_name
            new_user['user']['username'] = message.from_user.username
            new_user['user']['username'] = message.from_user.username
            new_user['date'] = message.date

            users.append(new_user)  
            update_users_list(users)


@bot.message_handler(commands=['start', 'help'])
def send_welcome(message): 

    user_is_unique(message)
    
    bot.send_message(message.chat.id, "Hello I'm bot to watch your messages on the site petryk.me", reply_markup=markup)


@bot.message_handler(commands=['last_message'])
def last_message(message):
    bot.send_message(message.chat.id, 'Last message')



@bot.message_handler(commands=['all_messages'])
def last_message(message):

    for i in range(10):
        bot.send_message(message.chat.id, f'{i} message')


def send_new_message(new_message_from_site):
    with open(USERS, 'r') as f:
        users = json.load(f)

        for user in users:
            bot.send_message(user['user']['id'], new_message_from_site)




bot.polling()