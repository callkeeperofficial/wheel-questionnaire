import { View, StyleSheet } from 'react-native';


export function ContainerTemplate(props: {children: any, heroElement?: any}) {
    const { children, heroElement } = props;

    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                { heroElement }
                <View style={styles.innerContainer}>
                    {children}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eee",
    },
    firstContainer: {
        flex: 1,
        width: "100%",
        maxWidth: 500,
        backgroundColor: "white",
        // borderRadius: 20,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-around",
        paddingHorizontal: 25,
        paddingVertical: 20,
        // borderRadius: 20,
    },
});
