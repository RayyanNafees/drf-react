from .models import Lead
from .serializers import LeadSerializer
from rest_framework import viewsets, permissions


class LeadViewset(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    permission_classes = [permissions.AllowAny]

    queryset = Lead.objects.all()
