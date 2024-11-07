const user_input = document.getElementById('user-input');
const send_btn = document.getElementById('send-btn');
const messages_div = document.getElementById('messages');

// Set API endpoint and API key
const apiEndpoint = 'https://api.groq.com/openai/v1/chat/completions';
const apiKey = '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';

send_btn.addEventListener('click', () => {
    const user_message = user_input.value.trim();
    if (user_message !== '') {
        // Set API request headers and data
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        };
        const data = {
            'prompt': user_message,
            'temperature': 0.5,
            'max_tokens': 256,
        };

        // Make API request
        fetch(apiEndpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            const ai_response = data.choices[0].message.content;
            const message_html = `
                <div class="message">
                    <span class="user">${user_message}</span>
                    <span class="ai">${ai_response}</span>
                </div>
            `;
            messages_div.innerHTML += message_html;
            user_input.value = '';
        })
        .catch(error => console.error(error));
    }
});