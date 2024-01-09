package KR1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KR1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISKR1Товары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "Вид")
    private String вид;

    @Column(name = "Стоимость")
    private Integer стоимость;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }

    public String getВид() {
      return вид;
    }

    public void setВид(String вид) {
      this.вид = вид;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }


}