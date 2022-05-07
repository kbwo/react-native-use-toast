# react-native-use-toast

- useToast hook like Chakra UI in React Native.
- simple and easy to use.
- animation.

https://user-images.githubusercontent.com/54230093/167245668-e1832699-fbca-4bd1-b964-9f94cf6d1a3e.mov

## Instration
```sh
npm install react-native-use-toast
# or
yarn add react-native-use-toast
```

## Usage
See the [example](example/src/App.tsx)
```
  const { toast } = useToast();
  return (
      <Button
        title="bottom"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'bottom',
            status: 'success',
          });
        }}
      />
  );
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## TODO
- Add more custamizeable component
- Close toast by swipe

## License
MIT
