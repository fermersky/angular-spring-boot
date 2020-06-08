package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

@Transactional
public interface ImageRepository extends JpaRepository<Image, Long> {
    @Query(value = "SELECT sum(pg_column_size(i.pic_bytes)) as filesize FROM public.Images as i;", nativeQuery = true)
    Long getTotalSizeOfBytes();
}
