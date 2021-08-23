import os
import telebot 


def send_new_message(new_message_from_site):
    bot = telebot.TeleBot(os.environ.get('TELEGRAM_TOKEN'))
    bot.send_message(os.environ.get('USER_ID') , new_message_from_site)