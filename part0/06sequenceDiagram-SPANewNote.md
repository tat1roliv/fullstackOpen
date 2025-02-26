```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Request Payload:{content: "input user value",…}
    server-->>browser: 201 Reponse: {"message":"note created"}
    deactivate server
