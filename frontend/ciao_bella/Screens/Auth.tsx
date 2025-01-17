import React, { useState } from "react";
import { GlobalStyles } from "../constants/styles";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import {createUser} from '../utils/auth'
import { useAppDispatch } from "../hooks";
import {signin} from '../Slice/userSlice'

type AuthData = {
  email:string;
  password:string;
}

export function Auth() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [data,setdata]=useState<AuthData>({email:"",password:""})
  const [errorMsg,setErrorMsg] = useState<string|null>()
  const dispatch = useAppDispatch()


  function handleEmail(e: NativeSyntheticEvent<TextInputChangeEventData>){
    e.persist()
    setErrorMsg(null)
    setdata((state)=>({...state,email:e.nativeEvent.text}))
  }

  function handlePassword(e: NativeSyntheticEvent<TextInputChangeEventData>){
    e.persist()
    setErrorMsg(null)
    setdata((state)=>({...state,password:e.nativeEvent.text}))
  }

  async function authHandler():Promise<void>{
    setIsLoading(true)
    try {
      await createUser(isRegister?"signUp":"signInWithPassword",data.email,data.password)
      if (!isRegister) dispatch(signin(data.email))
      setdata({email:"",password:""})
    } catch (error) {
      setErrorMsg(isRegister?"Cant Create User":"Cant Sign in")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.modeContainer}>
        <View style={styles.modeInnerContainer}>
          <Pressable onPress={() => setIsRegister(false)}>
            <View style={[styles.pressSwitch, !isRegister && styles.selected]}>
              <Text style={[styles.modeText,!isRegister && styles.modeTextSelected]}>
                Sign In
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setIsRegister(true)}>
            <View style={[styles.pressSwitch, isRegister && styles.selected]}>
              <Text style={[styles.modeText, isRegister && styles.modeTextSelected]}>
                Register
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} value={data.email} onChange={handleEmail}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput secureTextEntry={true} style={styles.input} value={data.password} onChange={handlePassword}/>
      </View>

      <Pressable
        style={styles.button}
        onPress={authHandler}
      >
        <Text style={styles.buttonText}>
          {isLoading?"Loading":isRegister ? "Register" : "Sign In"}
        </Text>
      </Pressable>
      {errorMsg&&<View style={styles.errorContainer}><Text style={styles.errorText}>{errorMsg}</Text></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: GlobalStyles.colors.primary500,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderColor: GlobalStyles.colors.primary200,
    borderWidth: 1,
  },
  modeContainer: {
    //   justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
  },
  modeInnerContainer: {
    flexDirection: "row",
    // backgroundColor:'white',
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  pressSwitch: {
    // ma: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    // backgroundColor: GlobalStyles.colors.primary100,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: GlobalStyles.colors.primary400,
  },
  modeText: {
    color: GlobalStyles.colors.primary400,
    fontSize: 16,
  },
  modeTextSelected: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorContainer:{
    marginVertical:10,
    // justifyContent:'center'
  },
  errorText:{
    color:"red",
    textAlign:"center"
  }
  
});
