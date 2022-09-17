import asyncio
import websockets
import openai

def generate_prompt(goal):
    return "Provide some motivation based on each person's goal.\n\n\
Goal: 'I want to lose twenty pounds in the next six months.'\n\n\
Response: 'Each step in your journey is a a step towards a more capable self.'\n\n\
Goal: 'I want to apply to fifty jobs this month.'\n\n\
Response: 'If you can handle rejection, you can do anything.'\n\n\
Goal: '{}'".format(goal)

async def hello(websocket, path):
    goal = await websocket.recv()
    print("< {}".format(goal))
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=generate_prompt(goal),
        temperature=0.8,
        max_tokens=80
    )
    response_txt = response.choices[0].text
    print(response_txt)
    await websocket.send(response_txt)

with open("key.txt", "r") as f:
    key = f.read()
openai.api_key = key



start_server = websockets.serve(hello, 'localhost', 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
