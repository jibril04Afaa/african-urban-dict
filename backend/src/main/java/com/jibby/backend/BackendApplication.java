package com.jibby.backend;

import com.jibby.backend.entity.DefinitionEntity;
import com.jibby.backend.models.Definition;
import com.jibby.backend.repositories.DefinitionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(DefinitionRepository definitionRepository) {
        return args -> {
            DefinitionEntity definitionEntity = new DefinitionEntity(null, "Omo", "West Africa", "Nigerian Pidgin", "naijaman", "buddy / friend", "Omo how we go do am");

            System.out.println("Saving definition...");
            definitionRepository.save(definitionEntity);
            System.out.println(definitionRepository.findAll());

        };
    }

}
