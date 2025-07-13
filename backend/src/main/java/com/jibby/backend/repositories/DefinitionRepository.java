package com.jibby.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jibby.backend.entity.DefinitionEntity;

public interface DefinitionRepository extends JpaRepository<DefinitionEntity, Long> {
}
