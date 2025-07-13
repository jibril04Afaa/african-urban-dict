package com.jibby.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jibby.backend.entity.Definition;

public interface DefinitionRepository extends JpaRepository<Definition, Long> {
}
