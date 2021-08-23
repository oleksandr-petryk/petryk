#!/bin/bash 

base_dir=$(dirname "$0")
base_dir=$(dirname "$base_dir")

source $base_dir/env/env/bin/activate
python3 $base_dir/src/telegram_bot/bot.py