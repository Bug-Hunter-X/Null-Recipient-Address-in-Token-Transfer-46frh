```javascript
function transferTokens(recipient, amount) {
  // ... some code to transfer tokens ...
}

// ... later in the code ...

const recipient = await getRecipientAddress();//getRecipientAddress() might return a promise that resolves to null
if (!recipient) {
  // Handle the case where recipient is null 
  throw new Error('Recipient address is null!');
}

transferTokens(recipient, amount);
```