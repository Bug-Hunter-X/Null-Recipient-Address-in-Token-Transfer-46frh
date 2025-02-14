# Null Recipient Address Bug in Dapp

This repository demonstrates a common bug in decentralized applications (DApps) where asynchronous operations can return null values, leading to unexpected errors.

## Description
The `transferTokens` function attempts to transfer tokens to a recipient address obtained from the `getRecipientAddress` function. However, if `getRecipientAddress` returns a Promise that resolves to null, the code will throw an error during the token transfer.

## Solution
The solution involves adding a check to handle the case where the recipient address is null.