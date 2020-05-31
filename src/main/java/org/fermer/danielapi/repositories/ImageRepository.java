package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface ImageRepository extends JpaRepository<Image, Long> {
}
