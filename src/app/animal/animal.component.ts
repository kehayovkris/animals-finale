import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Animal {
  breed: string;
  lifespan: string;
  weight: string;
  image: {
    url: string;
  };
}

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  title!: string;
  breed!: string;
  lifeSpan!: string;
  weight!: string;
  imageUrl!: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const animalType = this.route.snapshot.paramMap.get('type');
    if (typeof animalType === 'string' && animalType !== '') {
      this.title = animalType.charAt(0).toUpperCase() + animalType.slice(1);
    }

    this.http.get<Animal>(`https://api.the${animalType}api.com/v1/images/search`).subscribe(data => {
      this.breed = data.breed;
      this.lifeSpan = data.lifespan;
      this.weight = data.weight;
      this.imageUrl = data.image.url;
    });
  }
}
