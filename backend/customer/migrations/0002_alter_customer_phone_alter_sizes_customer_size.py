# Generated by Django 5.1.6 on 2025-03-02 17:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='phone',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='sizes',
            name='customer_size',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='sizes', to='customer.customer'),
        ),
    ]
