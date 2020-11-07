docker build -t chatbot:latest .
ibmcloud -login -sso
ibmcloud cr login 
docker tag chatbot:latest us.icr.io/socialjournal/chatbot:1
ibmcloud app push social-journal-chatbot