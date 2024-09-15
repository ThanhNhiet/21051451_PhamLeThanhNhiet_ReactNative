import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Screen1a = ({ goBack }: { goBack: () => void }) => {
    return (
        <View style={styles.container}>
            {/* Vùng 1: Hình tròn */}
            <View style={styles.circle} ></View>

            {/* Vùng 2: Tiêu đề */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>GROW</Text>
                <Text style={styles.title}>YOUR BUSINESS</Text>
            </View>

            {/* Vùng 3: Mô tả */}
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    We will help you to grow your business using online server
                </Text>
            </View>

            {/* Vùng 4: Các nút */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            {/* Vùng 5 */}
            <View style={styles.howweWorkContainer}>
                <Text style={styles.howweWork}>HOW WE WORK</Text>
            </View>

            {/* Thêm View với màu nền xanh cho phần còn lại */}
            {/* <View style={styles.bottomSection}>
                </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#d8f4f4',
        alignItems: 'center',
    },

    circle: {
        marginTop: 80,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 10,
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },

    descriptionContainer: {
        flex : 1,
        alignItems: 'center',
        marginTop: 80,
        marginRight: 20,
        marginLeft: 20,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },

    buttonContainer: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        width: 130,
        height: 50,
        marginHorizontal: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },

    howweWorkContainer: {
        flex: 2,
        marginTop: 5,
    },
    howweWork: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    // bottomSection: {
    //     flex: 1,
    //     width: '100%',
    //     backgroundColor: 'blue',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

export default Screen1a;
