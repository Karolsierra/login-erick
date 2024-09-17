import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',  
    email:'',
    password:''
  })
return (
  <SafeAreaView className="bg-primary h-full" >
    <ScrollView>
      <View className="w-full justify-center min-h-
      [83vh] px-4 my-6" >
      <Image source={images.logo} 
      resizeMode='contain' className="w-[115px] h-
      [35px]"/>
      <Text className="text-2x1 text-white
      text-semibold mt-10 font-psemibold">Regístrate en AVA</Text>

      <FormField 
        title="Username"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form,
        username: e })}
        otherStyles="mt-10"
      />

<FormField 
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form,
        email: e })}
        otherStyles="mt-7"
        keyboardType="email-address"
      />

      <FormField 
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form,
        password: e })}
        otherStyles="mt-7"
      />

      <CustomButton
       title="Sign In"
       handlePress={submit}
       containerStyles="mt-7"
       isLoading={isSubmitting} 
      />

      <View className="justify-center pt-5 flex-row gap-2">
      <Text className="text-lg text-gray-100 font-pregular">
      Ya tienes una cuenta?
      </Text>
      <Link href="/sign-in" className="text-lg 
      font-psemibold text-secondary">Iniciar Sesión</Link>
      </View>
      </View>
    </ScrollView>
  </SafeAreaView>
)
}

export default SignUp