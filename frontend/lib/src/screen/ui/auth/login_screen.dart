import 'package:fluentui_icons/fluentui_icons.dart';
import 'package:flutter/material.dart';
import 'package:frontend/src/core/utils/extension.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) => Scaffold(
        resizeToAvoidBottomInset: false,
        body: SafeArea(
          child: Form(
            child: Padding(
              padding: EdgeInsets.all(3.0.wp),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 3.0.wp),
                    child: Image.asset(
                      'assets/images/appImage.png',
                      width: 20.0.wp,
                    ),
                  ),
                  SizedBox(
                    height: 2.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 5.0.wp),
                    child: Text(
                      "Hello there",
                      style: TextStyle(
                        fontSize: 25.0.sp,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 2.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 5.0.wp),
                    child: Text(
                      "Please enter your email and password\nto sign in.",
                      style: TextStyle(
                        fontSize: 12.0.sp,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 5.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 5.0.wp),
                    child: const Align(
                      alignment: Alignment.topLeft,
                      child: Text(
                        'Email',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(
                      vertical: 2.0.wp,
                      horizontal: 5.0.wp,
                    ),
                    child: TextFormField(
                      decoration: const InputDecoration(
                        border: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green),
                        ),
                        focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green),
                        ),
                        prefixIcon:
                            Icon(FluentSystemIcons.ic_fluent_person_filled),
                        hintText: 'Enter email',
                      ),
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter username';
                        }
                        return null;
                      },
                      onChanged: (value) {
                        setState(() {});
                      },
                    ),
                  ),
                  SizedBox(
                    height: 5.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 5.0.wp),
                    child: const Text(
                      'Password',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(
                      vertical: 2.0.wp,
                      horizontal: 5.0.wp,
                    ),
                    child: TextFormField(
                      decoration: const InputDecoration(
                        border: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green),
                        ),
                        focusedBorder: UnderlineInputBorder(
                          borderSide: BorderSide(color: Colors.green),
                        ),
                        prefixIcon:
                            Icon(FluentSystemIcons.ic_fluent_lock_filled),
                        suffixIcon: Icon(
                          FluentSystemIcons.ic_fluent_eye_hide_filled,
                          color: Colors.grey,
                        ),
                        hintText: 'Enter password',
                      ),
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter password';
                        }
                        return null;
                      },
                      onChanged: (value) {
                        setState(() {});
                      },
                    ),
                  ),
                  SizedBox(
                    height: 3.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 5.0.wp),
                    child: Row(
                      children: [
                        SizedBox(
                          width: 20,
                          height: 20,
                          child: Checkbox(
                            fillColor: MaterialStateProperty.resolveWith(
                                (states) => Colors.grey),
                            onChanged: (value) {},
                            value: false,
                          ),
                        ),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 2.0.wp),
                          child: Text(
                            "Remember Me",
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.bold,
                              fontSize: 10.0.sp,
                            ),
                          ),
                        ),
                        const Spacer(),
                        TextButton(
                          onPressed: () {},
                          child: Text(
                            "Forgot Password ?",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.black,
                              fontSize: 10.0.sp,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 5.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 5.0.wp,
                    ),
                    child: SizedBox(
                      height: 15.0.wp,
                      width: double.infinity,
                      child: ElevatedButton(
                        style: ButtonStyle(
                          backgroundColor: MaterialStateProperty.all(
                            Colors.green,
                          ),
                          elevation: MaterialStateProperty.all(0),
                        ),
                        onPressed: () {
                          // if (_formKey.currentState!.validate()) {
                          //   _formKey.currentState!.save();

                          //   if (username == 'monews2023' &&
                          //       password == "monews@2023") {
                          //     EasyLoading.showSuccess("Successful Login");
                          //     Get.toNamed(RoutePath.dashboardScreen);
                          //   } else {
                          //     EasyLoading.showError(
                          //         "Incorrect Username Or Password");
                          //   }
                          // }
                        },
                        child: Text(
                          "Login".toUpperCase(),
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 12.0.sp,
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 5.0.wp,
                  ),
                  const Center(
                    child: Text("OR"),
                  ),
                  SizedBox(
                    height: 5.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(
                      horizontal: 5.0.wp,
                    ),
                    child: SizedBox(
                      height: 15.0.wp,
                      width: double.infinity,
                      child: OutlinedButton.icon(
                        onPressed: () {},
                        icon: const Icon(
                          Icons.mail,
                          color: Colors.black,
                        ),
                        label: Text(
                          "sign in with google".toUpperCase(),
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 1.0.wp,
                  ),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 5.0.wp),
                    child: SizedBox(
                      width: double.infinity,
                      child: TextButton(
                        onPressed: () {},
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text(
                              "Don't have a Account?",
                              style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(
                              width: 1.0.wp,
                            ),
                            const Text(
                              "News User",
                              style: TextStyle(
                                color: Colors.green,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
}
