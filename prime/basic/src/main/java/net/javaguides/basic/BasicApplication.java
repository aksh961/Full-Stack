package net.javaguides.basic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.basic.repository.Userrepository;
import net.javaguides.basic.model.User;

@SpringBootApplication
public class BasicApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BasicApplication.class, args);
	}

	@Autowired

	private Userrepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("helo", "ii"));
		this.userRepository.save(new User("hello", "hi"));

	}
}
