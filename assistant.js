import OpenAI from 'openai';
import fs from 'fs';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const file_ids = ["file-ig6JY3D92jSEjuE20CGt4s7z"];
var assistant_id = "asst_N15URoUR5lJr8uZ0s9mJrR5V";

async function createAssistant() {
    const myAssistant = await openai.beta.assistants.create({
        instructions:
            "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",
        name: "Math Tutor",
        tools: [{ type: "retrieval" }],
        model: "gpt-4-1106-preview",
        file_ids: file_ids,
    });

    console.log(myAssistant);
    assistant_id = myAssistant.id;
}

async function updateAssistant() {
    const myUpdatedAssistant = await openai.beta.assistants.update(
      "asst_N15URoUR5lJr8uZ0s9mJrR5V",
      {
        file_ids: [
          "file-ig6JY3D92jSEjuE20CGt4s7z",
        ],
      }
    );
  
    console.log(myUpdatedAssistant);
  }

async function uploadFile(file_path) {
    const file = await openai.files.create({
        file: fs.createReadStream(file_path),
        purpose: "assistants",
    });

    console.log(file);
    file_ids.push(file.id)
}

async function createThreadRun() {
    var run = await openai.beta.threads.createAndRun({
        assistant_id: assistant_id,
        thread: {
            messages: [
                { role: "user", content: "how am i graded?" },
            ],
        },
    });
    console.log(run);

    // Wait for the run to complete
    while (run.status !== 'completed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
        console.log(run.status);
    }
    // Retrieve the messages from the thread
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    console.log("Messages:");
    for (let message of messages.data) {
        console.log("text: " + message.content[0].text.value);
        console.log("annotations: " + message.content[0].text.annotations);
    }
}

async function main() {
    // await uploadFile("syllabus.pdf");
    // await createAssistant();
    // updateAssistant();
    createThreadRun();
}

main();