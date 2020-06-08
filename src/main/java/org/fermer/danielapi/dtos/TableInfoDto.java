package org.fermer.danielapi.dtos;

public class TableInfoDto {
    private Long value = 0L;
    private String summary = "";
    private String prefix = "";
    private String suffix = "";

    public TableInfoDto(String summary, Long value) {
        this(summary, value, "", "");
    }

    public TableInfoDto(String summary, Long value, String prefix, String suffix) {
        this.value = value;
        this.summary = summary;
        this.prefix = prefix;
        this.suffix = suffix;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }
}
