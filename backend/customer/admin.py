from django.contrib import admin
from . import models

@admin.register(models.Customer)
class AdminCustomer(admin.ModelAdmin):
    list_display = ["id","user_name" , "last_name" , "phone"]
    
    
    
    
@admin.register(models.Sizes)
class AdminSize(admin.ModelAdmin):
    list_display = ["customer_size" ,'main_width' , "pants_width" , "shoulder_width" , "stein_width" , "stein_radius" , "side_hight" , "throat_radius" , "pants_radius" , "stein_model" , "collar_model"]
    
    