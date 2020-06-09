import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Dimensions, FlatList } from 'react-native';
import oldpost from "../../posts";


const { width, height } = Dimensions.get('window')
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Post = (props) => {

    const { navigation, route: { params } } = props
    console.log(params);


    const [open, setOpen] = useState(false)
    const [post, setPost] = useState("")
    const [posts, setPosts] = useState(oldpost)

    const OnAddPosts = () => {
        if (post.trim() !== "") {
            const data = {
                "name": params.user.name,
                "post": post,
                "comments": []
            }
            setPosts([data, ...posts])
            setPost("")
            setOpen(false)

        } else {
            alert("Write Something to Post")
        }

    }



    return (
        <View style={{ flex: 1, alignContent: "center", marginTop: 40 }}>
            <View style={styles.Btnview}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => props.navigation.navigate("Profile", { "user": params.user })}
                    >
                        <Text style={styles.loginText}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity

                        style={{ ...styles.Btn, backgroundColor: 'blue', }}
                        onPress={() => props.navigation.navigate("Post", { "user": params.user })}
                    >
                        <Text style={styles.loginText}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => props.navigation.navigate("Login")}
                    >
                        <Text style={styles.loginText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 10, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 25, marginLeft: Devicewidth / 2.3 }}>Post</Text>

                <TouchableOpacity
                    style={{ ...styles.Btn, marginTop: 0, marginRight: 25, backgroundColor: "blue" }}
                    onPress={() => setOpen(true)}
                >
                    <Text style={styles.loginText}>Add Post</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <View style={{ borderBottomWidth: 0.7, borderBottomColor: "#333", marginVertical: 10, marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 17, padding: 10 }}>{item.post}</Text>
                        <View style={{ paddingLeft: 25 }}>
                            <FlatList
                                data={item.comments}
                                renderItem={({ item }) =>
                                    <View>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                                        </TouchableOpacity>

                                        <Text style={{ fontSize: 15, paddingLeft: 10 }}>{item.comment}</Text>
                                    </View>
                                } />
                            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                                <TextInput
                                    style={{
                                        margin: 0, justifyContent: "flex-start", alignItems: "flex-start",
                                        width: "65%",
                                        padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                                    }}
                                    placeholder="Comment..."
                                />
                                <TouchableOpacity
                                    style={{ ...styles.Btn, marginTop: 0, marginLeft: 20, backgroundColor: "blue", alignSelf: "center" }}
                                    onPress={OnAddPosts}
                                >
                                    <Text style={styles.loginText}>Comment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                }

            />
            {open &&
                <View style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "absolute", elevation: 7.2, height: Deviceheight, width: Devicewidth, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: "#fff", height: Deviceheight / 2, width: Devicewidth / 1.1, padding: 10 }}>
                        <TouchableOpacity style={{ alignSelf: "flex-end" }}
                            onPress={() => setOpen(false)}
                        >
                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>X</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={{
                                margin: 25, justifyContent: "flex-start", alignItems: "flex-start",
                                padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                            }}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={value => setPost(value)}
                            value={post}
                            placeholder="Write Something..."
                        />

                        <TouchableOpacity
                            style={{ ...styles.Btn, marginTop: 20, marginRight: 25, backgroundColor: "blue", alignSelf: "center" }}
                            onPress={OnAddPosts}
                        >
                            <Text style={styles.loginText}>Add Post</Text>
                        </TouchableOpacity>

                    </View>
                </View>}


        </View>
    )
}

const styles = StyleSheet.create({
    Btnview: {
        flexDirection: "row",
        width: "100%",
        paddingBottom: 40,
        justifyContent: "space-between"
    },
    loginText: {
        color: '#fff'
    },
    Btn: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe0000',
        padding: 10,
        elevation: 7,
        borderRadius: 5,
        height: 40,
        marginTop: 20
    },

})

export default Post