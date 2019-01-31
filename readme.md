# Dweb.page React & Redux Template

> Everything you need to get started with a decentralized react & redux application you can run on dWeb (https://pact.online)

The intend of this project is to get your development started as fast as possible. If you prefer to take an in depth look, what the core principles behind it are, check out the [medium post](https://blog.florence.chat/tutorial-how-to-build-a-completely-free-dapp-11a4ddf5959c). Please notice that the tutorial does not explicitly cover the react implementation, but a general approach.

# Local Development
The template is using the webpack development server for local development. If you are familiar with react and redux, your development flow will be the same as with standard applications.

To get the application running in browser run
```
npm run start
```


# Deploy as dWeb application
To build your application run
```
npm run build
```

This will output the application to dist/index.html. You can now simply upload that file by using https://pact.online. The result will be a distributed webpage you can access through any IPFS gateway: [Click me](https://pactcare.online/ipfs/QmUKeneFnubSzJmmq347mcZugxaeWqadkZMSjGhRJjT6z9).

## License

[MIT License](https://github.com/PACTCare/Dweb.React/blob/master/LICENSE) © PACT Care B.V.