import 'package:flutter/material.dart';
import 'package:frontend/src/screen/ui/auth/login_screen.dart';
import 'package:get/route_manager.dart';

void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: RoutePath.loginScreen,
      getPages: Router.routes,
    ),
  );
}

class RoutePath {
  // Authentication
  static const loginScreen = '/';
}

class Router {
  static final routes = [
    GetPage(
      name: RoutePath.loginScreen,
      page: () => const LoginScreen(),
    ),
  ];
}
