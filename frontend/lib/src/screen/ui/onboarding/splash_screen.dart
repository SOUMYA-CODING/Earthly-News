import 'package:flutter/material.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          children: [
            Image.asset(
              'assets/logo/appLogo.png',
              width: 150,
              height: 150,
            ),
            const SizedBox(
              width: 15.0,
            ),
            const Text(
              "EartlyNews",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
            ),
          ],
        ),
      ),
    );
  }
}
