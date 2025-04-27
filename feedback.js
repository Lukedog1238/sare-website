document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const submissionMessage = document.getElementById('submission-message');

    feedbackForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const feedbackType = document.getElementById('feedbackType').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const feedbackText = document.getElementById('feedbackText').value;

        const webhookURL = 'https://discord.com/api/webhooks/1365880962671706112/SIabUex2c8d6hdEL2RIFKcDo9Hd5QRIir36BDqZITuatjYh-u_zArZYuOMxj8glHjrBr'; // Replace with your actual Discord webhook URL

        const message = {
            embeds: [{
                title: 'New Feedback Received',
                color: 0x64b5f6, // Blue color
                fields: [
                    {
                        name: 'Type',
                        value: feedbackType,
                        inline: true,
                    },
                    {
                        name: 'Username',
                        value: username || 'Not Provided',
                        inline: true,
                    },
                    {
                        name: 'Email',
                        value: email || 'Not Provided',
                        inline: false,
                    },
                    {
                        name: 'Feedback',
                        value: feedbackText,
                        inline: false,
                    },
                ],
                timestamp: new Date().toISOString(),
            }],
        };

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });

            if (response.ok) {
                submissionMessage.textContent = 'Feedback submitted successfully!';
                submissionMessage.className = 'submission-message success';
                feedbackForm.reset(); // Clear the form
            } else {
                submissionMessage.textContent = 'Error submitting feedback. Please try again later.';
                submissionMessage.className = 'submission-message error';
                console.error('Discord webhook error:', response.status, response.statusText);
            }
        } catch (error) {
            submissionMessage.textContent = 'Error submitting feedback. Please check your connection.';
            submissionMessage.className = 'submission-message error';
            console.error('Fetch error:', error);
        }
    });
});
