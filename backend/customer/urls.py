from django.urls import path
from . import views


urlpatterns = [
    path('customer_list/' , views.customer_list),
    path('customer_id=<int:id>/' , views.put_and_delete_customer),
    path('get_customer_by_id=<int:id>/' , views.get_customer_by_id),

    path('add_customer/' , views.create_customer),
    path('get_customer_size_by_id=<int:id>/' , views.update_customer_size),
    path('add_size/' , views.create_size_for_customer),
    path('get_size_by_id=<int:id>/' , views.get_size_by_id),

] 