from nmt_chatbot.inference import inference_internal
#from nmt_chatbot.nmt.test import test

def reply(question):
    return question
    answers = inference_internal(question)[0]
    if answers is None:
        print(colorama.Fore.RED + "! Question can't be empty" + colorama.Fore.RESET)

        return None
    else:
        out = answers['answers'][answers['scores'].index(max(answers['scores']))]
        print(out)
        return out

# print(reply("hello!"))