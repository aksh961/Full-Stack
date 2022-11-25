package com.codewitharjun.fullstackbackend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.codewitharjun.fullstackbackend.model.Users;
import com.codewitharjun.fullstackbackend.repository.UserRepository1;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private UserRepository1 repo;

	@Test
	public void testCreateUser() {
		Users user = new Users();
		user.setEmail("ravikumar@gmail.com");
		user.setPassword("ravi2020");
		user.setFirstName("Ravi");
		user.setLastName("Kumar");

		Users savedUser = repo.save(user);

		Users existUser = entityManager.find(Users.class, savedUser.getId());

		assertThat(user.getEmail()).isEqualTo(existUser.getEmail());

	}

	@Test
	public void testFindByEmail() {
		String email = "nam@codejava.net";
		Users user = repo.findByEmail(email);

		assertThat(user.getEmail()).isEqualTo(email);
	}
}
