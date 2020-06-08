package org.fermer.danielapi.repositories;

import org.fermer.danielapi.models.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FileRepository extends JpaRepository<File, Long> {
    @Query("select new org.fermer.danielapi.models.File(f.filename, f.type, f.picBytes) from File f where f.filename = :filename")
    Optional<File> findByFilename(@Param("filename") String filename);

    @Query(value = "SELECT sum(pg_column_size(f.pic_bytes)) as filesize FROM public.Files as f;", nativeQuery = true)
    Long getTotalSizeOfBytes();
}
