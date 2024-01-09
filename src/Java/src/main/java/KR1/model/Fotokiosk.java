package KR1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KR1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Фотокиоск
 */
@Entity(name = "IISKR1Фотокиоск")
@Table(schema = "public", name = "Фотокиоск")
public class Fotokiosk {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Адрес")
    private String адрес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovary")
    @Convert("Tovary")
    @Column(name = "Товары", length = 16, unique = true, nullable = false)
    private UUID _tovaryid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovary", insertable = false, updatable = false)
    private Tovary tovary;


    public Fotokiosk() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}