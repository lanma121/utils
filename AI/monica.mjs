import request from '../web/request.mjs';

const conversationId = "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235";


const defaultData ={
    "task_uid": "task:a3430d95-f099-4608-bf1c-691fe8268778",
    "bot_uid": "monica",
    "data": {
        "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
        "items": [
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "content": "__RENDER_BOT_WELCOME_MSG__",
                    "type": "text"
                },
                "item_id": "msg:ed78e9e7-669b-458c-9fb6-e58b0efe4361",
                "item_type": "reply",
                "summary": "__RENDER_BOT_WELCOME_MSG__"
            },
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "chat_model": "deepseek_reasoner",
                    "content": "convert .crx to source code",
                    "is_incognito": false,
                    "max_token": 0,
                    "quote_content": "",
                    "type": "text"
                },
                "item_id": "msg:16b79ed1-d3cb-4e77-9469-5e28069ffc15",
                "item_type": "question",
                "parent_item_id": "msg:ed78e9e7-669b-458c-9fb6-e58b0efe4361",
                "summary": "convert .crx to source code"
            },
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "content": "TypeError: Failed to fetch",
                    "from_task_type": "chat_with_custom_bot",
                    "manual_web_search_enabled": false,
                    "question_id": "msg:16b79ed1-d3cb-4e77-9469-5e28069ffc15",
                    "type": "error"
                },
                "item_id": "msg:b6521823-06a0-4c8e-9424-0bf6ad920079",
                "item_type": "reply",
                "parent_item_id": "msg:16b79ed1-d3cb-4e77-9469-5e28069ffc15",
                "summary": "TypeError: Failed to fetch"
            },
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "chat_model": "deepseek_reasoner",
                    "content": "convert .crx to source code",
                    "is_incognito": false,
                    "max_token": 0,
                    "quote_content": "",
                    "type": "text"
                },
                "item_id": "msg:4543be64-81ac-4db5-8964-f33ef57fe780",
                "item_type": "question",
                "parent_item_id": "msg:b6521823-06a0-4c8e-9424-0bf6ad920079",
                "summary": "convert .crx to source code"
            },
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "agent_status": [
                        {
                            "text": "",
                            "type": "thinking",
                            "uid": "v2XTV1OR"
                        },
                        {
                            "metadata": {
                                "title": "Reasoning Process"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "Okay"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " user"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " wants"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " convert"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " a"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "cr"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "x"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " file"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " source"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " code"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Let"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " me"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " think"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " about"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " how"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " approach"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " this"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "First"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " I"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " remember"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "cr"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "x"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " files"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " are"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Chrome"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extensions"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " So"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " they"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'re"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " essentially"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ZIP"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " archives"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " The"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " user"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " probably"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " needs"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extract"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " contents"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "I"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " should"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " explain"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " they"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " can"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " rename"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "cr"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "x"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "zip"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " and"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " un"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "zip"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " it"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " But"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " wait"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " sometimes"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " doesn"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'t"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " work"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " because"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " file"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " not"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " a"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " proper"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ZIP"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Maybe"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " there"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'s"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " another"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " method"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "Oh"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " right"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " using"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " command"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " line"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " with"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " un"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "zip"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " help"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " If"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " fails"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " perhaps"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " a"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " tool"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " like"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " CR"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "X"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Ext"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ractor"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " could"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " useful"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Also"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " mentioning"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Chrome"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'s"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " own"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extraction"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " via"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extensions"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " page"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " an"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " alternative"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "Wait"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " user"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " not"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " familiar"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " with"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " command"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " line"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " tools"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " I"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " should"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " provide"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " clear"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " step"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "-by"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "-step"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " instructions"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " for"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " different"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " methods"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Also"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " note"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " some"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extensions"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ob"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "f"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "usc"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ated"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " so"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " source"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " code"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " not"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " be"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " readable"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "Make"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " sure"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " mention"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " if"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " extension"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " is"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " min"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ified"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " or"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ob"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "f"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "usc"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ated"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " they"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " might"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " need"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " additional"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " tools"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " to"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " de"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ob"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "f"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "usc"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ate"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " code"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " But"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " that"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'s"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " a"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " separate"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " step"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " so"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " maybe"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " just"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " a"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " brief"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " note"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " about"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " it"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "Okay"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " structure"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " the"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " answer"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " with"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " methods"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " like"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ren"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "aming"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " using"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " un"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "zip"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " command"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " online"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " tools"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " and"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Chrome"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "'s"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " method"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Also"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ","
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " include"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " notes"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " about"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " possible"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " issues"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " like"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " ob"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "f"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "usc"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "ation"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "."
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " Keep"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " it"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " simple"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " and"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": " user"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": "-friendly"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        },
                        {
                            "metadata": {
                                "reasoning_detail": ".\n"
                            },
                            "text": "",
                            "type": "thinking_detail_stream",
                            "uid": "BOtXyhYp"
                        }
                    ],
                    "content": "To convert a `.crx` (Chrome extension) file to source code, follow these steps:\n\n## Methods to Extract Source Code\n\n### Method 1: Manual Extraction (Simple)\n1. **Rename the file**  \n   Change the `.crx` extension to `.zip`  \n   Example: `your-extension.crx` → `your-extension.zip`\n\n2. **Extract the ZIP**  \n   Use any archive tool (WinRAR/7-Zip) to unzip the file\n\n### Method 2: Command Line (Linux/Mac)\n```bash\nunzip your-extension.crx -d extracted_source_code\n```\n\n### Method 3: Chrome Extension Source Viewer\n1. Open Chrome and install [CRX Extractor](https://chrome.google.com/webstore/detail/crx-extractordownloader/ajkhmmldknmfjnmeedkbkkojgobmljda)\n2. Drag-and-drop the `.crx` file into Chrome\n3. Download the extracted source code\n\n### Method 4: Chrome Built-in Extraction\n```bash\n# Navigate to chrome://extensions\nchrome://extensions\n\n# Enable \"Developer mode\"\n# Drag-and-drop the .crx file into Chrome\n```\n\n## Notes\n- If extraction fails, the extension might be packed with additional protection\n- Minified code ([e.g.,](https://i.imgur.com/ABCD123.png)) may require de-obfuscation tools\n- Some extensions use WebAssembly (`.wasm`) that can't be directly converted to readable source\n\n````artifact\nid: extraction-script\nname: CRX Extraction Script\ntype: code.sh\ncontent: |-\n  #!/bin/bash\n  INPUT_CRX=\"$1\"\n  OUTPUT_DIR=\"${INPUT_CRX%.crx}\"\n\n  # Create output directory\n  mkdir -p \"$OUTPUT_DIR\"\n\n  # Unzip with verbose output\n  unzip -v \"$INPUT_CRX\" -d \"$OUTPUT_DIR\"\n````\n\nTo use the script:  \n```bash\nchmod +x extract_crx.sh\n./extract_crx.sh your_extension.crx\n```",
                    "from_task_type": "chat_with_custom_bot",
                    "manual_web_search_enabled": false,
                    "question_id": "msg:4543be64-81ac-4db5-8964-f33ef57fe780",
                    "type": "text"
                },
                "item_id": "msg:801342f4-84cd-4608-bc9a-6d9c542e32be",
                "item_type": "reply",
                "parent_item_id": "msg:4543be64-81ac-4db5-8964-f33ef57fe780",
                "summary": "To convert a `.crx` (Chrome extension) file to source code, follow these steps:\n\n## Methods to Extract Source Code\n\n### Method 1: Manual Extraction (Simple)\n1. **Rename the file**  \n   Change the `.crx` extension to `.zip`  \n   Example: `your-extension.crx` → `your-extension.zip`\n\n2. **Extract the ZIP**  \n   Use any archive tool (WinRAR/7-Zip) to unzip the file\n\n### Method 2: Command Line (Linux/Mac)\n```bash\nunzip your-extension.crx -d extracted_source_code\n```\n\n### Method 3: Chrome Extension Source Viewer\n1. Open Chrome and install [CRX Extractor](https://chrome.google.com/webstore/detail/crx-extractordownloader/ajkhmmldknmfjnmeedkbkkojgobmljda)\n2. Drag-and-drop the `.crx` file into Chrome\n3. Download the extracted source code\n\n### Method 4: Chrome Built-in Extraction\n```bash\n# Navigate to chrome://extensions\nchrome://extensions\n\n# Enable \"Developer mode\"\n# Drag-and-drop the .crx file into Chrome\n```\n\n## Notes\n- If extraction fails, the extension might be packed with additional protection\n- Minified code ([e.g.,](https://i.imgur.com/ABCD123.png)) may require de-obfuscation tools\n- Some extensions use WebAssembly (`.wasm`) that can't be directly converted to readable source\n\n````artifact\nid: extraction-script\nname: CRX Extraction Script\ntype: code.sh\ncontent: |-\n  #!/bin/bash\n  INPUT_CRX=\"$1\"\n  OUTPUT_DIR=\"${INPUT_CRX%.crx}\"\n\n  # Create output directory\n  mkdir -p \"$OUTPUT_DIR\"\n\n  # Unzip with verbose output\n  unzip -v \"$INPUT_CRX\" -d \"$OUTPUT_DIR\"\n````\n\nTo use the script:  \n```bash\nchmod +x extract_crx.sh\n./extract_crx.sh your_extension.crx\n```"
            },
            {
                "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
                "data": {
                    "chat_model": "deepseek_reasoner",
                    "content": "hi",
                    "is_incognito": false,
                    "max_token": 0,
                    "quote_content": "",
                    "type": "text"
                },
                "item_id": "msg:700c4c29-d35e-488e-bf30-aaa5b9c56dfe",
                "item_type": "question",
                "parent_item_id": "msg:801342f4-84cd-4608-bc9a-6d9c542e32be",
                "summary": "hi"
            }
        ],
        "pre_generated_reply_id": "msg:4744545a-1873-4c35-92e3-08f05de146b3",
        "pre_parent_item_id": "msg:700c4c29-d35e-488e-bf30-aaa5b9c56dfe",
        "origin": "https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/write",
        "origin_page_title": "Clipboard：write() 方法 - Web API | MDN",
        "trigger_by": "auto",
        "is_incognito": false,
        "use_new_memory": true,
        "use_memory_suggestion": true
    },
    "language": "auto",
    "locale": "en",
    "task_type": "chat_with_custom_bot",
    "tool_data": {
        "sys_skill_list": [
            {
                "allow_user_modify": false,
                "enable": false,
                "force_enable": false,
                "uid": "web_access"
            },
            {
                "allow_user_modify": false,
                "enable": false,
                "force_enable": false,
                "uid": "draw_image"
            },
            {
                "allow_user_modify": false,
                "enable": false,
                "force_enable": false,
                "uid": "book_calendar"
            },
            {
                "allow_user_modify": false,
                "enable": true,
                "force_enable": false,
                "uid": "artifacts"
            },
            {
                "allow_user_modify": false,
                "enable": false,
                "force_enable": false,
                "uid": "code_interpreter"
            }
        ]
    },
    "ai_resp_language": "English"
}

const getChatData = (
    { conversation_id = "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235", pre_generated_reply_id, pre_parent_item_id, items} = {},
    language = "English") => {
        Object.assign({}, defaultData.data, {
            data: {
            items,
            conversation_id,
            pre_generated_reply_id,
            pre_parent_item_id,
        }}, {
            language,
            
        });
    Object.assign({}, data, {
        data: {
        items,
        conversation_id,
        pre_generated_reply_id,
        pre_parent_item_id,
    }}, {
        language,
        
    });
}

const getItems = () => {
    const item = {
        "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235",
        "data": {
            "chat_model": "deepseek_reasoner",
            "content": "What is defined as the process of securing a system by reducing its surface of vulnerability by the removal of unnecessary software, unnecessary usernames or logins, and the disabling or removal of unnecessary services?\n\nSDLC securing\n\nSystem hardening\n\nDenial by default\n\nThreat modeling\n\n",
            "is_incognito": false,
            "max_token": 0,
            "quote_content": "",
            "type": "text"
        },
        "item_id": "msg:ce090e1e-2228-46ea-8b89-78ff88f63e5e",
        "item_type": "question",
        "parent_item_id": "msg:5dce2f47-53d6-4db2-9724-f63622c0ae03",
        "summary": "What is defined as the process of securing a system by reducing its surface of vulnerability by the removal of unnecessary software, unnecessary usernames or logins, and the disabling or removal of unnecessary services?\n\nSDLC securing\n\nSystem hardening\n\nDenial by default\n\nThreat modeling\n\n"
    }
}


export async function run(url, data) {
    const result = await request(url, {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data
    });
    console.log('monica result====', JSON.stringify(result));
    return result;
}

export async function chat() {
    const items = await item_list(conversation_id, limit);
    return run('https://api.monica.im/api/custom_bot/chat', {});
}

export async function conversation_list() {
    return run('https://api.monica.im/api/custom_bot/get_conversation_list', {});
}

export async function item_list(conversation_id = conversationId, limit = 10) {
    return run('https://api.monica.im/api/custom_bot/get_chat_item_list_v2',  {
        "limit": limit,
        "conversation_id": conversation_id
    });
}

export async function list_my_pined_bot() {
    const aa = await request('https://api.monica.im/api/custom_bot/list_my_pined_bot', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {}
    });
    console.log('====', aa);
}

export async function list_compare_bot() {
    const aa = await request('https://api.monica.im/api/custom_bot/list_compare_bot', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {}
    });

    console.log('====', aa);
}


export async function list_artist_bot() {
    const aa = await request('https://api.monica.im/api/custom_bot/list_artist_bot', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {
            "tab": "explore",
            "explore_exclude_mine": false,
            "classification": "all"
        }
    });

    console.log('====', aa);
}

export async function config() {

    const aa = await request('https://api.monica.im/api/app_config/get_app_configs', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {
            "config_names": [
                "monica_model_list_v2"
            ]
        }
    });

    console.log('====', aa);
}

export async function artifact() {
    const aa = await request('https://api.monica.im/api/artifact_snapshots/list', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {
            "limit": 10000,
            "offset": 0,
            "conversation_id": "conv:5a7c7b37-48cd-4842-9f58-ca7ab01c7235"
        }
    });

    console.log('====', aa);
}


export async function me() {
    const aa = await request('https://api.monica.im/api/user/me', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        }
    });

    console.log('====', JSON.stringify(aa));
}


export async function generate() {
    const aa = await request('https://api.monica.im/api/writing/generate', {
        headers: {
            'Content-Type': 'application/json',
            "cookie": "session_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzE1MDI1OTksImlzcyI6Im1vbmljYSIsInVzZXJfaWQiOjI1NjUxNjAyLCJ1c2VyX25hbWUiOiJUeWxlciIsImp0aSI6ImZhMmJlZDY3NzllODQyZmNhZDE5YjgxYWYyYTVmMjJmIiwiY2xpZW50X3R5cGUiOiJleHRlbnNpb24ifQ.R3Q88sbU-dAsGQhUiXcsAmV6u4bFPM6BVySu3nhFy-w;"
        },
        data: {
            "task_uid": "task:c55a1488-9477-4c3f-a9ee-d77b5dc5c68f",
            "data": {
                "content": "I'm looking for this reason",
                "user_input": {
                    "input_type": "user_input",
                    "value": "Improve it",
                    "key": "improve_it"
                },
                "config": {
                    "formality": "auto",
                    "tone": [
                        "auto"
                    ],
                    "length": "auto",
                    "format": "auto",
                    "compose_language": "English",
                    "use_model": "gpt-4o-mini"
                }
            },
            "language": "English",
            "locale": "en",
            "task_type": "writing:optimize"
        }

    });

    console.log('====', JSON.stringify(aa));
}

item_list(undefined, 1000);