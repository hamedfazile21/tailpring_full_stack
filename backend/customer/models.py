from django.db import models

name = {
    "maine_width" : "قد  پیراهن",
    "pants_width" : "قد شلوار",
    "shoulder_width" : "قد شانه",
    "stein_width" : "قد استین",
    "stein_radius" : "قطر استین",
    "side_hight" : "اندازه پهلو ها",
    "throat_radius" : "قطر گلو",
    "pants_radius" : "قطر شلوار",
    "stein_model" : "مدل استین",
    "collar_model" : "مدل یغه",
}


class Customer (models.Model):
    user_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    
    def __str__(self):
        return f'{self.user_name} , {self.last_name}'


class Sizes(models.Model):
    customer_size = models.OneToOneField(Customer , on_delete=models.CASCADE , related_name="sizes")
    main_width = models.IntegerField()
    pants_width = models.IntegerField()
    shoulder_width = models.IntegerField()
    stein_width = models.IntegerField()
    stein_radius = models.IntegerField()
    side_hight = models.IntegerField()
    throat_radius = models.IntegerField()
    pants_radius = models.IntegerField()
    stein_model = models.CharField(max_length=255) 
    collar_model = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.customer_size.user_name}"