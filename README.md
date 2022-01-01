# moviesapp

### To run the project

### IOS

yarn && cd ios && pod install && cd .. && npx react-native run-ios

Make sure you're on IOS real device to test the camera, gallery can be tested on the simulator.

### Android

yarn && cd ios && npx react-native run-android

---

## Some Information about the structure

### path: App/containers/${container-name}

### files:

    - container-name.container.js
    - container-name.styles.js
    - Component
        - component-name
         - component-name.component.js
         - component-name.styles.js

    ${name}.test.js can be added for the test cases.

### Responsibility:

    - API calls through data layer

### sample for callbacks

    const ParentComponent = ()=>{

        const doAction = ()=>{
            // navigate
            // OR
            // Call API
            // OR
            // Dipatch action
            // OR
            // Any other business logic
        }
        return (
            <Text>Sample text</Text>
            <ChildComponent childClicked={doAction} />
        )
    }



    const ChildComponent = (props)=>{
        return (
            <Buttton onPress={()=>{
                props.childClicked()
            }}>Click me!
            </Button>
        )
    }

### Movies Mapper can be found under App/services/mappers

### Api Service

### Responsibility:

- contain networking layer
- endpoints

### Api Config

### Responsibility:

handle api urls
