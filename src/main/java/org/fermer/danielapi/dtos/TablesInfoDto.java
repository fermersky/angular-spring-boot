package org.fermer.danielapi.dtos;

import java.util.HashMap;

public class TablesInfoDto {
    private HashMap<String, Long> countsMap;

    public TablesInfoDto() {}

    public TablesInfoDto(HashMap<String, Long> countsMap) {
        this.countsMap = countsMap;
    }

    public HashMap<String, Long> getCountsMap() {
        return countsMap;
    }

    public void setCountsMap(HashMap<String, Long> countsMap) {
        this.countsMap = countsMap;
    }
}
