package com.example.api.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)  //Generates ID automatically
    private Integer id;

    private String name;

    private String email;

    private String branch;

    private String phone;

    private Integer age;

}