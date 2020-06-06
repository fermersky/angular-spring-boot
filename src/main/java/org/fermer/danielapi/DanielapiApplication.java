package org.fermer.danielapi;

import org.fermer.danielapi.security.JwtProvider;
import org.fermer.danielapi.security.dtos.SignInDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class DanielapiApplication {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtProvider jwtProvider;

	public static void main(String[] args) {
		SpringApplication.run(DanielapiApplication.class, args);

		System.out.println("Project successfully runned");
	}


	@PostMapping("/signin")
	public String signIn(@RequestBody SignInDto signInDto) {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInDto.getUsername(), signInDto.getPassword()));

			return "{\"token\":\"" + jwtProvider.createToken(signInDto.getUsername()) + "\" }";
		} catch (AuthenticationException e){
			System.out.println("Log in failed for user, " + signInDto.getUsername());
		}

		return "";
	}
}
